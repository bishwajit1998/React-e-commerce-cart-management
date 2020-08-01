import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:30,
        tags:["tag1","tag2","tag3","tag4","tag5"]

    };
styles={
    fontSize: 22,
    fontWeight: "italic"
};

handleIncrement(){
    console.log("value has been incremented");
};

    renderTags(){
        if(this.state.tags.length===0) return <p>there are no tags!</p>;

        return <ul>{this.state.tags.map(tag=><li key={tag}>{ tag }</li>)}</ul>;
    }

    render() {
      return (
        <div>
             <span style = {this.styles}className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm">Increment</button>00
            <ul>
                {this.renderTags()}
            </ul>
        </div> ) ;
    }
    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
export default Counter;