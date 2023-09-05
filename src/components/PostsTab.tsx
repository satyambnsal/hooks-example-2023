import React from 'react'

const PostsTab = React.memo(function PostsTab() {
    let items = [];

    for(let i =0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />)
    }

    return (
        <ul className="items">{items}</ul>
    )
})

function SlowPost({index}: {index: number}) {
    let startTime = performance.now();
    while(performance.now() - startTime < 1) {

    }

    return (<li className="item"> Post #{index + 1} </li>)
}

export default PostsTab;