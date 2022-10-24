import { getAllDataFromIndexedDB, openIndexedDB, readFromIndexedDB, writeIntoIndexedDB } from '../utils';

export type DBMigration = (db: IDBDatabase) => void;

export const migrations: DBMigration[] = [
    db => {
        db.createObjectStore('tasks', {
            keyPath: 'id',
            autoIncrement: true,
        });
    }
];

// openIndexedDB('TODO_TASKS', migrations)
//     .then(db => {
//         return writeIntoIndexedDB(db, 'tasks', {
//             firstName: 'Lebron',
//             lastName: 'James',
//         });
//     })
//     .then(() => {
//         console.log('SUPER');
//     });

openIndexedDB('TODO_TASKS', migrations)
    .then(db => {
        return getAllDataFromIndexedDB(db, 'tasks');
    })
    .then((elem) => {
        console.log(elem);
    });

export class TodoDB {

}
