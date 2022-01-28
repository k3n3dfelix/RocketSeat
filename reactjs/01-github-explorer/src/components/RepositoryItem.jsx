const repositoryName = 'unform2';

export function RespositoryItem(props) {
    return (
      
            
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Default"}</p>
            <a href={props.repository?.link ?? "Default"}>Acessar repositorio</a>
        </li>
        
       
    );
}