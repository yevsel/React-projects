import { useEffect, useState } from "react";
import {FaTwitter,FaLinkedin} from 'react-icons/fa'
const Calculator = () => {

    const [content,setContent]=useState('')
    const [figures,setFigures]=useState([])
    const [operator,setOperator]=useState('')
    const [effect,setEffect]=useState(true)

    useEffect(()=>{
        let answer;
        if(operator==='+'){
            answer = Number(figures[0])+Number(figures[1])
        }
        else if(operator==='*'){
            answer = Number(figures[0])*Number(figures[1])
        }
        else if(operator==='/'){
            answer = Number(figures[0])/Number(figures[1])
        }
        else if(operator==='-'){
            answer = Number(figures[0])-Number(figures[1])
        }
        else if(operator==='%'){
            answer = Number(figures[0])%Number(figures[1])
        }
        else{
            setContent(answer)
        }
    },[effect])

    return ( 
        <div>
                <div className='calculator shadw p-3'>
                <div>
                    <input type="text" value={content} className='enter form-control p-2' />
                </div>
                <div className='buttons mt-3'>
                    <div className='first'>
                        <button className='ac' onClick={()=>{
                            setFigures([])
                            setContent('')
                            setOperator('')
                            }}>{content ? "C" : "AC"}</button>
                        <button className='negative' onClick={()=>setContent(prev=>-prev)}>+/-</button>
                        <button onClick={()=>{
                            {content && setFigures(prev=>[...prev,content])}
                            setContent('')
                            setOperator('%')
                        }} className='modulus'>%</button>
                        <button onClick={()=>{
                            {content && setFigures(prev=>[...prev,content])}
                            setContent('')
                            setOperator('/')
                        }} className='operator'>/</button>
                    </div>
                    <div className='second'>
                        <button onClick={()=>setContent(prev=>prev+7)}>7</button>
                        <button onClick={()=>setContent(prev=>prev+8)}>8</button>
                        <button onClick={()=>setContent(prev=>prev+9)}>9</button>
                        <button onClick={()=>{
                            {content && setFigures(prev=>[...prev,content])}
                            setContent('')
                            setOperator('*')
                        }} className='operator'>x</button>
                    </div>
                    <div className='third'>
                        <button onClick={()=>setContent(prev=>prev+4)}>4</button>
                        <button onClick={()=>setContent(prev=>prev+5)}>5</button>
                        <button onClick={()=>setContent(prev=>prev+6)}>6</button>
                        <button onClick={()=>{
                            {content && setFigures(prev=>[...prev,content])}
                            setContent('')
                            setOperator('-')
                        }} className='operator'>-</button>
                    </div>
                    <div className='forth'>
                        <button onClick={()=>setContent(prev=>prev+1)}>1</button>
                        <button onClick={()=>setContent(prev=>prev+2)}>2</button>
                        <button onClick={()=>setContent(prev=>prev+3)}>3</button>
                        <button onClick={()=>{
                            {content && setFigures(prev=>[...prev,content])}
                            setContent('')
                            setOperator('+')
                        }} className='operator'>+</button>
                    </div>
                    <div className='fifth'>
                        <button  onClick={()=>setContent(prev=>prev+0)} className='zero'>0</button>
                        <div className='dot'>
                            <button onClick={()=>setContent(prev=>prev+'.')} className='mx-2'>.</button>
                            <button onClick={()=>{
                                setFigures(prev=>[...prev,content])
                                setEffect(!effect)
                            }} className='operator'>=</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <a href="https://www.linkedin.com/in/justice-selasi-yevoo-066322216/" target={"_blank"} className='p-3'><FaLinkedin/></a>
                <a href="https://www.twitter.com/yevsel" target={"_blank"}><FaTwitter/></a>
            </div>

        </div>
        
     );
}
 
export default Calculator;