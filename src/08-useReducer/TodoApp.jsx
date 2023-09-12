import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />         
        </div>

        <div className="col-5">
            <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ todo => handleNewTodo(todo) }/>
        </div>
        
    </div>
    

      
    </>
  )
}

// Al crear este componente, se borra la importacio de react y se crea un fragmento y dentro de este fragmento creamos un h1 que diga TodoApp, de bajo un hr y tambien un unordered list <ul></ul> dentro colocar unas list item <li></li>, tres veces debemos tomar el TodoApp y dirigirnos al index.js, dentro del React.StrictMode que se encuentra comentado ponemos el TodoApp, nos aseguramos que dentro del index este importado el TodoApp al guardar cambios en navegador se debe de visualizar el TodoApp con los tres item que se escribieron. Como funciona el useReducer? todo empieza importando esa funcion o ese hook damos tab para que se importe, y posteriormente usar el snippet, se vera que se crea todo el objeto de lo que usaremos quedando de esta manera: const [state, dispatch] = useReducer( reducer, initialState ); Tambien se crea la constante initialState que sera igual a un arreglo [] y dentro se abren y cierran llaves y colocamos un id que sera new Date().getTime(), esto es para obtener fecha y momento actual solamente los numero, se agregara la descripcion que sera el recolectar la piedra del alma y el done se coloca en false, copiamos lo que creamos y lo pegamos debajo, agregando en el id al final un * 3, solo para tener un numero diferente ya se tiene el initialState con dos entradas, el initialState ya se encuentra configurado, ese es el objeto que vamos a estar manejando, pero ahora bien el reducer y este puede ser definido en el mismo archivo en el mismo funtional component y eso no es lo que estamos buscando eso ya que lo que se esta buscando es que todo este en el mismo archivo es mas el initialState no lo tendria aqui, de preferencia estaria en el lado de la funcion pero por ahora el initialState se queda aqui.

// Ahora dentro de la constante TodoApp en el useReducer se agregara el todoReducer se da tab para que se importe y lo checamos al inicio de nuestro codigo, solamente se pasara la referencia no se ejecutara (), se guardar cambios y se va al navegador web, se recarga la pagina y en la pestaña de componentes se selecciona el TodoApp y dentro de los hooks se ven los dos elementos, para finalizar se sustituye el state por el todos y se guardan los cambios.