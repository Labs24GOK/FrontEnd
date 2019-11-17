import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Icon} from 'semantic-ui-react'
import { editStudentById, toggleEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button} from '../../mainStyle/styledComponent';

const StudentForm = (props) => {

    const { studentID } = props;

    let birthdate = new Date(props.studentById.birthdate).toISOString().split("T")[0];

    const [state, setState] = useState({
        cpr: props.studentById.cpr,
        id: studentID,
        first_name: props.studentById.first_name,
        additional_names: props.studentById.additional_names,
        gender: props.studentById.gender,
        birthdate: birthdate,
        home_telephone: props.studentById.home_telephone,
        mobile_telephone: props.studentById.mobile_telephone,
        email: props.studentById.email,
        preferred_contact_type_id: props.studentById.preferred_contact_type_id,
        location_id: props.studentById.location_id,
        block_code: props.studentById.block_code,
        road: props.studentById.road,
        flat: props.studentById.flat,
        building: props.studentById.building,
        no_call: props.studentById.no_call,
        delinquent: props.studentById.delinquent,
        expelled: props.studentById.expelled,
        notes: props.studentById.notes,
        family_id: props.studentById.family_id
    });

    const [error, setError] = useState({
        first_name: false,
        additional_names: false
    })

    const handleChange = (e, result) => {
        const {name, value}= result || e.target;
        if(e.target.value === ''){
            setError({
                ...error,   
                [name]: true
            })
        }
        if(value.length !== 0){
            setError(false)
        }
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(error) {
            props.toggleEditComponent('true', 'false')
        } else {
            props.toggleEditComponent('false', 'true')
            props.editStudentById(studentID, state)
        }
    }

    const handleCancel = e => {
        props.toggleEditComponent('false', 'false');
    }

    const genderOptions = [
        { key: 'M', text: 'M', value:'M' },
        { key: 'F', text: 'F', value:'F'  }
    ]

    const blockCode = [
        {key: 363, text: 363, value: 363},
        {key: 431, text: 431, value: 431},
        {key: 433, text: 433, value: 433},
        {key: 435, text: 435, value: 435},
        {key: 439, text: 439, value: 439},
        {key: 441, text: 441, value: 441},
    ]

    const testArr = ['test', 'test']
    
    return (
            <FormWrap onSubmit={handleSubmit} style={{ margin: '3%' }}>
                {!props.isEdited ? <h3 style={{color: 'red'}}>{props.error}</h3> : null}
                <fieldset style={{ border: '1px solid transparent', margin: '10px 5px 0px 5px', background: '#E0EBF0' }}>
                <div style={{
                display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridGap: '15px', margin: '10px'
                }}>
                        {/* row 1 */}
                            <div>
                                <div  style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" }} >
                                    <Icon name="save" style={{ color: "#26ABBD", cursor: "pointer" }} /> Save Report
                                </div>
                            </div>
                        
                        
                        <div>
                            <label>CPR</label>
                            <div>
                            <Input
                                type='text'
                                name='cpr'
                                placeholder='CPR'
                                onChange={handleChange}
                                value={state.cpr}
                            />
                        </div>
                        </div>


                       <div>
                            <label>First name</label>
                            <div>
                        {!error.first_name ? <Input 
                                type='text'
                                name='first_name'
                                placeholder='First Name'
                                onChange={handleChange}
                                value={state.first_name}
                            />  :  <Input required
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            onChange={handleChange}
                            value={state.first_name}
                            error={{content:'First Name is required'}}
                        /> }
                           </div> 
                        </div>
                        
                        <div style={{ gridColumn: 'span 2' }}>
                            <label>Additional names</label>
                            <div>
                            {!error.additional_names ? <Input
                                type='text'
                                name='additional_names'
                                placeholder='Additional Names'
                                onChange={handleChange}
                                value={state.additional_names}
                                style={{ width: '100%'}}
                            /> : <Input
                            required
                            type='text'
                            name='additional_names'
                            placeholder='Additional Names'
                            onChange={handleChange}
                            value={state.additional_names}
                            error={{content:'Additional Names'}}
                            style={{ width: '100%'}}
                        />}
                        </div>
                        </div>
                            
                        
                      <div>
                            <label>Gender</label>
                            <div>
                            <Dropdown 
                             controlClassName='myControlClassName'
                             className='dropdown'
                             value={state.gender} 
                             onChange={handleChange}
                              options={genderOptions} 
                              />
                            </div>
                            </div>


                        <div>
                            <label>Email</label>
                            <div>
                            <Input
                                type='text'
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                                value={state.email}
                                error={{content: 'Please enter email', pointing: 'above'}}
                            />
                            </div>
                            </div>


                            <div>
                            <label>School Name</label>
                            <div>
                            <Input
                                type='text'
                                name='school_name'
                                placeholder='School Name'
                                onChange={handleChange}
                                value={state.school_name}
                            />
                            </div>
                            </div>



                            <div>
                            <label>Birthdate</label>
                            <div>
                            <Input
                                type='date'
                                name='birthdate'
                                placeholder='Gender'
                                onChange={handleChange}
                                value={state.birthdate}
                            />
                            </div>
                            </div>
                        
                        
                            {/* <div horizontal style={{ background: "#E0EBF0", boxShadow: "none", border: "none" }}> */}
                           
                            
                       
                
                    {/* row 2 */}


                    <div>
                            <label>Location</label>
                            <div>
                            <Dropdown
                                controlClassName='myControlClassName'
                                className='dropdown'
                                onChange={handleChange}
                                value={state.location_id}
                                options={testArr}
                            />
                            </div>
                            </div>
                    
                       <div>
                            <label>Home Telephone</label>
                            <div>
                            <Input
                                type='text'
                                name='home_telephone'
                                placeholder='Home Telephone'
                                onChange={handleChange}
                                value={state.home_telephone}
                            />
                            </div>
                            </div>
                       
                        <div>
                            <label>Mobile Telephone</label>
                            <div>
                            <Input
                                type='text'
                                name='mobile_telephone'
                                placeholder='Mobile Telephone'
                                onChange={handleChange}
                                value={state.mobile_telephone}
                                error={{content: 'Please enter mobile telephone.', pointing: 'above'}}
                            />
                            </div>
                            </div>
                     
                    
                      
                        <div>
                            <label>Contact Method</label>
                            <div>
                            <Dropdown
                                controlClassName='myControlClassName'
                                className='dropdown'
                                onChange={handleChange}
                                value={state.preferred_contact_method}
                                options={testArr}
                            />
                            </div>
                            </div>
                       
                    
                     
                   
                    {/* row 3  */}
                    <div>
                            <label>Block Code</label>
                            <div>
                            <Dropdown 
                            controlClassName='myControlClassName'
                            className='dropdown'
                            options={testArr}
                            onChange={handleChange}
                            value={state.block_code}
                            />
                            </div>
                            </div>
                        

                        <div>
                            <label>Road</label>
                            <div>
                            <Input
                                type='text'
                                name='road'
                                placeholder='road'
                                onChange={handleChange}
                                value={state.road}
                            />
                        </div>
                        </div>
                       

                        <div>
                            <label>Building</label>
                            <div>
                            <Input
                                type='text'
                                name='building'
                                placeholder='building'
                                onChange={handleChange}
                                value={state.building}
                            />
                            </div>
                            </div>


                       <div>
                            <label>Flat</label>
                            <div>
                            <Input
                                type='text'
                                name='flat'
                                placeholder='flat'
                                onChange={handleChange}
                                value={state.flat}
                            />
                            </div>
                            </div>
                        
                    
                        
                    

                        <div>
                            <label>Delinquent</label>
                            <div>
                            <Input
                                type='boolean'
                                name='delinquent'
                                placeholder='Delinquent'
                                onChange={handleChange}
                                value={state.delinquent}
                            />
                        </div>
                        </div>
                    

                    {/* row 4 */}
                   
                          
                    <div>
                            <label>School Grade ID</label>
                            <div>
                            <Dropdown
                               controlClassName='myControlClassName'
                               className='dropdown'
                                onChange={handleChange}
                                value={state.school_grade_id}
                                options={testArr}
                            />
                        </div>
                        </div>




                        <div>
                            <label>ID</label>
                            <div>
                            <Input
                                type='text'
                                name='id'
                                placeholder='ID'
                                onChange={handleChange}
                                value={state.id}
                            />
                            </div>
                            </div>

                      
                  
                      
                        <div>
                            <label>Grade Updated</label>
                            <div></div>
                            <Input
                                type='date'
                                name='grade_updated'
                                placeholder='Grade Updated'
                                onChange={handleChange}
                                value={state.grade_updated}
                            />
                            </div>
                            </div>
                        
                    {/* row 5 */}
                   
                        <div>
                            <label>Family ID</label>
                            <div>
                            <Input
                                type='text'
                                name='family_id'
                                placeholder='Family ID'
                                onChange={handleChange}
                                value={state.family_id}
                            />
                      </div>
                      </div>
                    
                    <div>
                        <label>Notes</label>
                        <div>
                        <textarea
                        style={{
                        width: '100%', height: '80px', outline: 'none',
                        border: '1px solid transparent', borderRadius: '3px'
                        }}
                        type='text'
                        name='notes'
                        placeholder='Notes'
                        onChange={handleChange}
                        value={state.notes}
                        />
                        </div>
                        </div>
                        {/* </div> */}
                </fieldset>
            </FormWrap>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEdited: state.studentByIdReducer.isEdited,
        isEditing: state.studentByIdReducer.isEditing,
        error: state.studentByIdReducer.error
    };
};


export default withRouter(
    connect(
        mapStateToProps,
        { editStudentById, toggleEditComponent }
    )(StudentForm)
)