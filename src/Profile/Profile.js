import PropTypes from 'prop-types';

export default function Profile(props) {
    const {fullName,FNPropsName} =props;
    return (
        <div>
            <h1 onClick={()=>FNPropsName(fullName)} style={{textAlign:'center'}}>{fullName}</h1>
            <h3 style={{textAlign:'center'}}>{props.bio}</h3>
            <p style={{textAlign:'center'}}>{`im a ${props.profession} at ISI Ariana`}</p>
            <div style={{width:'30rem', height:"30rem", margin:'2em auto' }}>{props.children}</div>
            
        </div>
    )
    
    }
    Profile.defaultProps={
        fullName:"Anas Daoud",
        bio:"Esperance de Tunis",
        profession:'Professor',
        FNPropsName:()=>console.log("please give me a name")
      }
    Profile.propTypes={
        fullName:PropTypes.string,
        bio:PropTypes.string,
        profession:PropTypes.string,
        handleName:PropTypes.func,

    }
