import React from 'react';
// const IFrame = React.createClass({
//     iframe: function () {
//         return {
//             __html: this.props.iframe,
//         };
//     },

//     render: function () {
//         return (
//             <div>
//                 <div dangerouslySetInnerHTML={this.iframe()} />
//             </div>
//         );
//     },
// });
// export default IFrame;

function IFrame(props) {
    return <div dangerouslySetInnerHTML={{ __html: props.iframe }} />;
}

export default IFrame;
