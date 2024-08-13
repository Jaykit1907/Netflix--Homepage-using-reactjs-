import React from 'react';
import Headnav from './Components/Headnav.js';
import Heading from './Components/Heading.js';
import Imageblock from './Components/Imageblock.js';
import Data from './Components/Data.js';
import Footerhead from './Components/Footerhead.js';
import Footerhead2 from './Components/Footerhead2.js';


function App(){




    return(<><Headnav/>
    
             <Heading/>
             <Imageblock/>
             {Data.map(function Imagecall(e){
                return(<>  
                        <Imageblock heading={e.heading}
                                    imgsrc1={e.imgsrc1}
                                    title1={e.title1}
                                    imgsrc2={e.imgsrc2}
                                    title2={e.title2}
                                    imgsrc3={e.imgsrc3}
                                    title3={e.title3}
                                    imgsrc4={e.imgsrc4}
                                    title4={e.title4}
                                    /> 

                                
                        </>

                      );

             })}
            
             <Footerhead/>
             <Footerhead2/>
            </>);
}

export default App;