let relojes = [
    { id: '1', marca:'Tag Heuer', precio: 4000, image:'card/1.png', stock: 9 },
    { id: '2', marca:'Casio', precio: 2000, image:'card/2.png', stock: 5 },
    { id: '3', marca:'Omega', precio: 3500, image:'card/3.png', stock: 7 },
    { id: '4', marca:'Apple watch', precio: 600, image:'card/4.png', stock: 10 },
    { id: '5', marca:'Rolex', precio: 19500, image:'card/5.png', stock: 2 },
    { id: '6', marca:'Patek Philippe', precio: 24000, image:'card/6.png', stock: 3 }
]

export const mFetch = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(relojes);
        }, 1000);
    });
};