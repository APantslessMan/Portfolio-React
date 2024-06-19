import React from 'react'

interface Props {
    message: string;
    onClose: () => void;
}

const Toast: React.FC<Props> = ({message}) => {
  return (
    <div className="grid justify-end mr-4 mt-4 fixed right-2 z-50 ">
        <div className="alert alert-success text-white bg-greel h-14 gradient-border border-3 border-black shadow-l shadow-white">
            <span className="text-1xl">{message}</span>
            
        </div>
    </div>
  )
}

export default Toast