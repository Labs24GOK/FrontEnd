import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editParentById, toggleEditParent } from '../../../../actions';
import { withRouter } from 'react-router-dom';
// import { Grid, label, Input, Icon } from 'semantic-ui-react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { FormWrap, Input, Button, RowFlex, Column, RowFlexEnd } from '../mainStyle/styledComponent';

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
       <FormWrap onSubmit={handleSubmit} >
                           
                  <RowFlex>
                        <Column>
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
                        </Column>
                        <Column>
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
                        </Column>
                        <Column>
                            <label>Primary Telephone</label>
                            <div>
                            <Input
                                type='text'
                                name='secondary_telephone'
                                placeholder='Primary Telephone'
                                onChange={handleChange}
                                value={state.secondary_telephone}
                            />
                            </div>
                        </Column>
                    </RowFlex>
                        {/* <div >
                            <label.Group horizontal style={{ background: "#E0EBF0", "box-shadow":"none", border:"none" }}>
                                <label.Inline onClick={handleSubmit} style={{ color: "#26ABBD", cursor: "pointer", width: "fit-content" ,margin: 0}}>
                                    <Icon name="save" style={{ color: "#26ABBD", cursor: "pointer" }} /> Save
                            </label.Inline>
                                <label.Inline onClick={handleCancel} style={{ color: "#C73642", cursor: "pointer", width: "fit-content", "margin-left": "10px" }}>
                                    <Icon name="cancel" style={{ color: "#C73642", cursor: "pointer" }} /> Cancel
                            </label.Inline>
                            </label.Group>
                        </div> */}
                   <RowFlex>
                   <Column>
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
                    </Column>
                    <Column>
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
                    </Column>
                    <Column>
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
                    </Column>
                    <Column>
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
                    </Column>     
                    </RowFlex>
                    
                    

                                
             <RowFlexEnd>
             <Column>
             <Button onClick={handleCancel} style={{ background: '#C73642', color:'#FFFFFF', width: '80px' }}>
                 Cancel
             </Button>
             <Button type="submit" onClick={handleSubmit} style={{ background: '#269FB0', color: '#FFFFFF', width: '80px' }}> 
                  Save
             </Button>
             </Column>
         </RowFlexEnd>
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