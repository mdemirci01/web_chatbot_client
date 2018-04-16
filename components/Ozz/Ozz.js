import React from 'react';
import {Motion, spring} from 'react-motion';

import $ from 'jquery';

import Button from './Button';
import OzzBase from './OzzBase';

class Ozz extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            active: false,
            hasTriggered: false,
            config: props.config,
            color: props.color,
            title: props.title
        };

        this._handleClick = this._handleClick.bind(this);
    }

    componentDidMount(){
        this.forceUpdate();
        // this.mounted = true;
        // $(document).mouseup($.proxy(function(e){
        //     var container = $('#ozz');

        //     // if the target of the click isn't the container nor a descendant of the container
        //     if (!container.is(e.target) && container.has(e.target).length === 0){
        //         if (this.mounted){
        //             this.setState({active:false});
        //         }
        //     }
        // },this));
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    _handleClick(){
        this.setState({
            active: !this.state.active
        });
    }


    render(){
        const {active, color, title} = this.state;

        return(
            <div>
                <div className="ozz" id="ozz">
                    {active ? <OzzBase active={active} color={color} title={title}/>:null}
                    <Button 
                        active={active}
                        onClick={this._handleClick}
                        color={color}
                    />
                </div>
            </div>
        )
    }
}

export default Ozz;