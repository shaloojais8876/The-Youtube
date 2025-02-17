import React from 'react'
import CommentBox from './CommentBox';





const data = [
    {
        username : "Harry Potter",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies : [
            { username : "Harry Potter",
                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies : [
                    { username : "Harry Potter",
                        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        replies : [
                            { username : "Harry Potter",
                                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            },
                        ]
                    },
                ]
            },

            
        ]
    },

    {
        username : "Hermoine Granger",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies : [
            { username : "Harry Potter",
                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies : [
                    { username : "Harry Potter",
                        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    },
                ]
            },

            { username : "Hermoine Granger",
                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies : [
                    { username : "Harry Potter",
                        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        replies : [
                            { username : "Harry Potter",
                                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        username : "Ronald Wesley",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies : [
            { username : "Harry Potter",
                comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies : [
                    { username : "Harry Potter",
                        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    },
                ]
            },
        ]
    },
    {
        username : "Ronald Wesley",
        comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
]

const CommentSection = () => {
  return (
    <div>
        <CommentBox  data = {data}/>
      
    </div>
  )
}

export default CommentSection;