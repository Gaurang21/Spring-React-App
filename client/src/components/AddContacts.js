
import React,{Component} from 'react';

export default class AddContacts extends Component{
    addContact(event){
        event.preventDefault();
        let contact = {
            firstName: event.target.elements.firstName.value,
            lastName:event.target.elements.lastName.value,
            email:event.target.elements.email.value   
        }
        fetch("http://localhost:8080/api/contacts",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(contact),
        }).then(response => response.json());

        window.location.reload();
    }
    render(){
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.addContact.bind(this)}>
                <div className="row">
                        <div className="input-field col s6">
                        <input placeholder="Placeholder" name="firstName" type="text" className="validate"/>
                        <label htmlFor="firstName">First Name</label>
                        </div>

                        <div className="input-field col s6">
                        <input name="lastName" type="text" className="validate"/>
                        <label htmlFor="lastName">Last Name</label>
                        </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input name="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" tyep="submit" name="action">Submit Contact</button>
                </div>
                </form>
            </div>
        )
    }
    
}
