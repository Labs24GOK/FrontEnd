import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editParentById, toggleEditParent } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, CancelButton, SaveButton, Div, FormSet, ButtonDiv} from '../mainStyle/styledComponent';
const ParentForm = props => {
    
    const [state, setState] = useState({
        id: props.parentById.id,
        father_name: props.parentById.father_name,
        mother_name: props.parentById.mother_name,
        primary_telephone: props.parentById.primary_telephone,
        secondary_telephone: props.parentById.secondary_telephone,
        block_code: props.parentById.block_code,
        building: props.parentById.building,
        flat: props.parentById.flat,
        road: props.parentById.road
    })
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.editParentById(props.parentId, state)
    }
    const handleCancel = e => {
        props.toggleEditParent();
    }
    return(
       <FormWrap onSubmit={handleSubmit}>
            <Div>
                     <div style={{gridColumn: "span3"}} >
                      
                    </div>
                </Div>
                <FormSet>
                 <Div>              
                        <div>
                           <label>Father Name</label>
                           <div>
                            <Input
                                type='text'
                                name='father_name'
                                placeholder='Father Name'
                                onChange={handleChange}
                                value={state.father_name}
                            />
                            </div>
                        </div>
                        <div>
                            <label>Mother Name</label>
                            <div>
                            <Input
                                type='text'
                                name='mother_name'
                                placeholder='Mother Name'
                                onChange={handleChange}
                                value={state.mother_name}
                            />
                            </div>
                        </div>
                        <div>
                            <label>Primary Telephone</label>
                            <div>
                            <Input
                                type='text'
                                name='primary_telephone'
                                placeholder='Primary Telephone'
                                onChange={handleChange}
                                value={state.primary_telephone}
                            />
                            </div>
                        </div>
                        <div>
                            <label>Scondary Telephone</label>
                            <div>
                            <Input
                                type='text'
                                name='secondary_telephone'
                                placeholder='Scondary Telephone'
                                onChange={handleChange}
                                value={state.secondary_telephone}
                            />
                            </div>
                        </div>
                    <div>
                        <label>Block Code</label>
                        <div>
                        <Input
                                type='text'
                                name='block_code'
                                placeholder='Block Code'
                                onChange={handleChange}
                                value={state.block_code}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Building</label>
                        <div>
                        <Input
                                type='text'
                                name='building'
                                placeholder='Building'
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
                                placeholder='Flat'
                                onChange={handleChange}
                                value={state.flat}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Road</label>
                        <div>
                        <Input
                                type='text'
                                name='road'
                                placeholder='Road'
                                onChange={handleChange}
                                value={state.road}
                            />
                        </div>
                    </div>                 
               </Div>
            </FormSet>
             <ButtonDiv>
             <CancelButton onClick={handleCancel} >
                 Cancel
             </CancelButton>
             <SaveButton type="submit" onClick={handleSubmit}> 
                  Save
             </SaveButton>
         </ButtonDiv>
       </FormWrap> 
                
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.parentReducer.isLoading,
        parentById: state.parentReducer.parentById,
        isEditing: state.parentReducer.isEditing,
    };
  };
export default withRouter(
    connect(
        mapStateToProps,
        { editParentById, toggleEditParent }
    )(ParentForm)
) 