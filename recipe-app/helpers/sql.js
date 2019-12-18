import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('treasure-hunt.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Clues (id INTEGER PRIMARY KEY NOT NULL, title TEXT, clueText TEXT, unlocksClueId INTEGER, answer TEXT, isSolved INTEGER);', [],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });

    return promise;
}

export const UnlockClue = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE Clues SET isSolved = ' + 1 + ' WHERE ID = ?', [id],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });
    return promise;
}

export const InsertClue = (title, clueText, unlocksClueId, answer, isSolved) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO Clues (title, clueText, unlocksClueId, answer, isSolved ) VALUES(?,?,?,?,?);', [title, clueText, unlocksClueId, answer, isSolved],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });

    return promise;
}

export const SelectAllClues = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Clues WHERE isSolved = ' + 1 + ';', [],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });
    return promise;
}

export const GetById = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Clues WHERE ID = ?;', [id],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });
    return promise;
}

export const DeleteClues = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM Clues;', [],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });
    return promise;
}

export const SelectTopClue = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Clues LIMIT 1;', [],
                (_, result) => { resolve(result); },
                (_, err) => { reject(err); });
        });
    });
    return promise;
}