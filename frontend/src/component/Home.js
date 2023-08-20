import Notes from "./Notes";
// import backgroundImage from "./libimage.webp";
const Home = (props) => {

  return (
    <div>
       <Notes showalert={props.showalert}/>
    </div>
  )
}

export default Home
