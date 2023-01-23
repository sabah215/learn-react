function ReasonList(){
       return(
           <div>
               <ol>
                   <li>The component based development helps make code more manageable</li>
                   <li>The JSX syntax are not complext at all to learn</li>
                   <li>The react community is strong and responsive enough to solve problems</li>
               </ol>
           </div>
       );
   }
   
   ReactDOM.render(
       <ReasonList/>,
       document.getElementById('root')
   );