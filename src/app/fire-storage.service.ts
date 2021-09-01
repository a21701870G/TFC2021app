import {Injectable} from '@angular/core';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Task} from './task';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class FireStorageService {

    private static USERS_KEY = 'users';
    private static TASKS_KEY = 'tasks';

    private unsubscribe: Subject<void> = new Subject<void>();

    constructor(public af: AngularFirestore, public angularAuth: AngularFireAuth) {
    }

    public getTasks(): Observable<Array<Task>> {
        return this.angularAuth.user
            .pipe(takeUntil(this.unsubscribe),
                switchMap(user => {
                    return this.af.collection(FireStorageService.USERS_KEY).doc(user.uid)
                        .collection<Task>(FireStorageService.TASKS_KEY).valueChanges();
                }));
    }

    public async createTask(task: Task): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        task.id = this.af.createId();
        return await this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
            .collection(FireStorageService.TASKS_KEY).doc(task.id).set(task);
    }

    public async updateTask(task: Task): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        return await this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
            .collection(FireStorageService.TASKS_KEY).doc(task.id).set(task);
    }

    public async deleteTask(taskId: any): Promise<void> {
        const currentUser = firebase.auth().currentUser;
        return await this.af.collection(FireStorageService.USERS_KEY).doc(currentUser.uid)
            .collection(FireStorageService.TASKS_KEY).doc(taskId).delete();
    }

    public unsubscribeOnLogout(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
