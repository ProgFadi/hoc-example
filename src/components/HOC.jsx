import React from 'react';

function HOC(Comp,data) {
    return class extends React.Component{
        constructor(props)
        {
            super(props)
            this.state = {
                data:data
            }
        }
        render()
        {
            return <Comp
            data ={this.state.data}
            {...this.props}
            >

            </Comp>
        }
    }
}

export default HOC;