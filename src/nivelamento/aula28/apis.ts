const BASE_URL = 'https://jsonplaceholder.typicode.com';
//DEFINIR CONTRATOS DE TIPO

type Post = {
    userId:number;
    id?: number; // campo opcional
    title: string;
    body: string;

};

type Comment={
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

//GET /Posts
async function listarPosts(){
    console.log(`--- 1.GET /post ---`);
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log (`X Status: ${res.status}`);
    console.log(`lidos ${dados.length} post ex do primeiro:`, dados[0].title)

}

//GET /posts/1

async function buscarPorId(id: number) {
    console.log(`--- 2.GET /post ---`);
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post[] = await res.json();
    console.log (`X Status: ${res.status}`);
    console.log(`titulo do post ${id}:`, dados.title);
}

//GET /post/1/comment

async function listarComment ( postId:number) {
    console.log(`--- 3.GET /post/1/comments ---`);
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    const dados: Post[] = await res.json();
    console.log (`X Status: ${res.status}`);
    console.log(`o post ${postId} tem ${dados.length} comentarios. Ex. email do primeiro comentario.`, dados[0].email);
}

async function chamarReqs(){
    listarPosts();
    buscarPorId(1);
    listarComment(1);

}

chamarReqs();
