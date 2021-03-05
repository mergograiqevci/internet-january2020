                
                
                function set_fName(){
                var inputValue=document.getElementById("fName").value;
               if (typeof(Storage) !== "undefined"){
               localStorage.setItem("fname", inputValue);       
                }else
       
                alert("Your browser does not support session storage");
                }
            function get_fName(){
                document.getElementById("fName").value=localStorage.getItem("fname");
            }
            
                 function set_mName(){
                var inputValue=document.getElementById("mName").value;
               if (typeof(Storage) !== "undefined"){
               localStorage.setItem("mname", inputValue);       
                }else
       
                alert("Your browser does not support session storage");
                }
            function get_mName(){
                document.getElementById("mName").value=localStorage.getItem("mname");
            }
            
                 function set_lName(){
                var inputValue=document.getElementById("lName").value;
               if (typeof(Storage) !== "undefined"){
               localStorage.setItem("lname", inputValue);       
                }else
       
                alert("Your browser does not support session storage");
                }
            function get_lName(){
                document.getElementById("lName").value=localStorage.getItem("lname");
            }
            
                 function set_dBirth(){
                var inputValue=document.getElementById("dBirth").value;
               if (typeof(Storage) !== "undefined"){
               sessionStorage.setItem("dBirth", inputValue);       
                }else
       
                alert("Your browser does not support session storage");
                }
            function get_dBirth(){
                document.getElementById("dBirth").value=sessionStorage.getItem("dBirth");
            }
            
            
               function set_user(){
                var inputValue=document.getElementById("user").value;
               if (typeof(Storage) !== "undefined"){
               sessionStorage.setItem("user", inputValue);       
                }else
       
                alert("Your browser does not support session storage");
                }
            function get_user(){
                document.getElementById("user").value=sessionStorage.getItem("user");
            }