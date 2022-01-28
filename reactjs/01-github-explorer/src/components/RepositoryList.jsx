import { RespositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform2',
    description: 'Forms em React',
    link: 'https://github.com/unform/unform'
};

export function RespositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Respositorios</h1>
            <ul>
               <RespositoryItem repository={repository} />
               <RespositoryItem/>
               <RespositoryItem/>
               <RespositoryItem/>
            </ul>
        </section>
    );
}