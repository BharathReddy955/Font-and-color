function redText(){
let col=document.getElementById("changecolor");
col.style.color="red";
}

function greenText(){
 let col=document.getElementById("changecolor");
    col.style.color="green";
    }

    function yellowText(){
        let col=document.getElementById("changecolor");
        col.style.color="yellow";
        }     
        function blueText(){
            let col=document.getElementById("changecolor");
            col.style.color="blue";
       }

       function violetText(){
        let col=document.getElementById("changecolor");
        col.style.color="violet";
    }
    function indigoText(){
        let col=document.getElementById("changecolor");
        col.style.color="indigo";
    }
    function pinkText(){
        let col=document.getElementById("changecolor");
        col.style.color="pink";
    }
    function cyanText(){
        let col=document.getElementById("changecolor");
        col.style.color="cyan";
 }
 function blackText(){
    let col=document.getElementById("changecolor");
    col.style.color="black";
    }
    function greyText(){
        let col=document.getElementById("changecolor");
        col.style.color="grey";
        }
        function redback(){
            let col=document.getElementById("changecolor");
            col.style.background="red";
            }
            
            function greenback(){
             let col=document.getElementById("changecolor");
                col.style.background="green";
                }
            
                function yellowback(){
                    let col=document.getElementById("changecolor");
                    col.style.background="yellow";
                    }     
                    function blueback(){
                        let col=document.getElementById("changecolor");
                        col.style.background="blue";
                   }
            
                   function violetback(){
                    let col=document.getElementById("changecolor");
                    col.style.background="violet";
                }
                function indigoback(){
                    let col=document.getElementById("changecolor");
                    col.style.background="indigo";
                }
                function pinkback(){
                    let col=document.getElementById("changecolor");
                    col.style.background="pink";
                }
                function cyanback(){
                    let col=document.getElementById("changecolor");
                    col.style.background="cyan";
             }
             function blackback(){
                let col=document.getElementById("changecolor");
                col.style.background="black";
                }
                function greyback(){
                    let col=document.getElementById("changecolor");
                    col.style.background="grey";
                    }

                function arial(){
                    //document.write("hello")
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='arial';
                }
                function timesnew(){
                    
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='Times New Roman';
                }
                function georgia(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='georgia';
                }
                function Garamond(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='Garamond';
                }
                function CourierNew(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='Courier New';
                }
                function geoBrushScriptMT(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='Brush Script MT';
                }
                function Copperplate(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='Copperplate';
                }
                function cursive(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='cursive';
                }
                function serif(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='serif';
                }
                function Tahoma(){
                    let data=document.getElementById('changecolor');
                    data.style.fontFamily='Tahoma';
                }

                document.addEventListener("DOMContentLoaded", () => {
                    const downloadBtn = document.getElementById("btn");
                    const changecolor = document.getElementById("changecolor");
                
                    downloadBtn.addEventListener("click", () => {
                        // Get the current styles and content
                        const textContent = changecolor.innerText;
                        const computedStyles = window.getComputedStyle(changecolor);
                        const textColor = computedStyles.color;
                        const backgroundColor = computedStyles.backgroundColor;
                        const fontFamily = computedStyles.fontFamily;
                
                        // Create an HTML structure with the styles applied
                        const fileContent = `
                            <html>
                            <head>
                                <style>
                                    body {
                                        margin: 20px;
                                        font-family: Arial, sans-serif;
                                    }
                                    h1 {
                                        color: ${textColor};
                                        background-color: ${backgroundColor};
                                        font-family: ${fontFamily};
                                        padding: 10px;
                                        border: 1px solid #ccc;
                                        border-radius: 5px;
                                    }
                                </style>
                            </head>
                            <body>
                                <h1>${textContent}</h1>
                            </body>
                            </html>
                        `;
                
                        // Create a Blob from the HTML content
                        const blob = new Blob([fileContent], { type: "text/html" });
                
                        // Create a URL for the Blob
                        const url = URL.createObjectURL(blob);
                
                        // Create a temporary download link
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "styled-content.html"; // File name
                        a.style.display = "none";
                
                        // Append the link to the document
                        document.body.appendChild(a);
                
                        // Programmatically click the link to start the download
                        a.click();
                
                        // Clean up: Remove the temporary link and revoke the Blob URL
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    });
                });
                