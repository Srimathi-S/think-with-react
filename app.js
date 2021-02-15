const container=document.getElementById("react-container");
//using string
//ReactDOM.render("Hello! Welcome to React",container);
//using function
/*const Container=()=>{
    return React.createElement("div",null,"Hey ProGrads! Welcome to React Learning",
    React.createElement('div',null,"Let's rock and roll")
    );
}
ReactDOM.render(React.createElement(Container),container);*/
//using class
/*class ReactContainer extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return React.createElement(`div`,null,`Hey ProGrads`,
        React.createElement(`div`,null,`Let's rock and roll`)
        );
    }
}
ReactDOM.render(React.createElement(ReactContainer),container)*/
//using jsx tags

class ReactContainer extends React.Component{
    render(){
          return  (
            <div>Hello! Welcome to ProGrads   
               <div>Let's rock and roll </div>
           </div> );
      }
  }
ReactDOM.render(<ReactContainer/>,container); 