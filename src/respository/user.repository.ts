import client from "../database/connection.ts"
export async function findAll()  { 
    return (await client.execute('SELECT * FROM users')).rows; 
}
export async function findById(id: number) { 
    return (await client.execute('SELECT * FROM users WHERE id = ?', [id] )).rows![0];  
}
export async function save(user:any)   { 
    await client.execute('INSERT INTO users(name, country) VALUES (?,?)',[user.name,user.country]); 
}

export async function update( id:number, user:any) { 
    await client.execute('UPDATE users SET name = ?, country = ? WHERE id = ? ;',[user.name,user.country,id]);
}

export async function remove( id:number) { 
    return await client.execute('DELETE FROM users WHERE id = ?;',[id]); 
}
