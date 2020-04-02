import React from 'react'
import { connect } from 'react-redux';
import { editParentById, toggleEditParent } from '../../../../actions';
import { withRouter } from 'react-router-dom';
import 'react-dropdown/style.css';
import { useForm } from 'react-hook-form';
import { FormWrap, Input, CancelButton, SaveButton, ButtonDiv, Div, FormSet, Label} from '../mainStyle/styledComponent';

import '../mainStyle/mainTable.scss';

const ParentForm = props => {
    
    const parent = props.parentById;
    const { register, errors, handleSubmit } = useForm();

    const submitNow = data => {
        props.editParentById(props.parentId, data)
    }
    
    const handleCancel = e => {
        props.toggleEditParent();
    }
    
    return(
        <FormWrap onSubmit={handleSubmit(submitNow)}>
            <FormSet>
                 <Div>              
                    <div>
                        <Label>Father Name</Label>
                        <div>
                            <Input type='text' name='father_name' placeholder='Father Name' defaultValue={parent.father_name} className={errors.father_name && "input-error"} ref={register({required: true})} />
                            {errors.father_name && errors.father_name.type === "required" && 'Father Name is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Mother Name</Label>
                        <div>
                            <Input type='text' name='mother_name' placeholder='Mother Name' defaultValue={parent.mother_name} className={errors.mother_name && "input-error"} ref={register({required: true})} />
                            {errors.mother_name && errors.mother_name.type === "required" && 'Mother Name is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Primary Telephone</Label>
                        <div>
                            <Input type='text' name='primary_telephone' placeholder='Primary Telephone' defaultValue={parent.primary_telephone} className={errors.primary_telephone && "input-error"} ref={register({required: true})} />
                            {errors.primary_telephone && errors.primary_telephone.type === "required" && 'Primary Telephone is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Secondary Telephone</Label>
                        <div>
                            <Input type='text' name='secondary_telephone' placeholder='Secondary Telephone' defaultValue={parent.secondary_telephone} className={errors.secondary_telephone && "input-error"} ref={register({required: true})} />
                            {errors.secondary_telephone && errors.secondary_telephone.type === "required" && 'Secondary Telephone is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Block Code</Label>
                        <div>
                            <Input type='text' name='block_code' placeholder='Block Code' defaultValue={parent.block_code} className={errors.block_code && "input-error"} ref={register({required: true})} />
                            {errors.block_code && errors.block_code.type === "required" && 'Block Code is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Building</Label>
                        <div>
                            <Input type='text' name='building' placeholder='Building' defaultValue={parent.building} className={errors.building && "input-error"} ref={register({required: true})} />
                            {errors.building && errors.building.type === "required" && 'Building is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Flat</Label>
                        <div>
                            <Input type='text' name='flat' placeholder='Flat' defaultValue={parent.flat} className={errors.flat && "input-error"} ref={register({required: true})} />
                            {errors.flat && errors.flat.type === "required" && 'Flat is Required'}
                        </div>
                    </div>
                    <div>
                        <Label>Road</Label>
                        <div>
                            <Input type='text' name='road' placeholder='Road' defaultValue={parent.road} className={errors.road && "input-error"} ref={register({required: true})} />
                            {errors.road && errors.road.type === "required" && 'Road is Required'}
                        </div>
                    </div>                 
               </Div>
            </FormSet>
            <ButtonDiv style={{ alignSelf: 'flex-end', paddingRight: '15px' }}>
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

export default withRouter( connect( mapStateToProps, { editParentById, toggleEditParent } )(ParentForm) )