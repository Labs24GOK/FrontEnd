import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { connect } from 'react-redux';
import { editStaffById, toggleStaffEditComponent } from '../../../../../actions';
import { withRouter } from 'react-router-dom';

import 'react-dropdown/style.css';
import { FormWrap,Input,  Div, FormSet, ButtonDiv, CancelButton, SaveButton, Label } from '../../mainStyle/styledComponent';

import "../../../../../styles/table.scss"

const StaffForm = props => {
  console.log(props)

  const { staffID } = props;

  const { register, errors, handleSubmit} = useForm();
  const dropDowns = ['gender']

  const submitNow = data => {
    for (const property of dropDowns) {
        data[property] = parseInt(data[property])    
    }
    props.editStaffById(staffID, data);
  }

  //Using dateConverter function here results in date NOT populating in edit form
  let birthdate = new Date(props.staffById.birthdate)
    .toISOString()
    .split('T')[0];

    useEffect(() => {
      props.editStaffById();
    }, []);

  //Array for dropdown gender menu
  // const genderArr = ['F', 'M'];

  //allows proper state to populat edit form for admin and active states
  let adminNum = 0;
  if (props.staffById.user_type === 'staff') {
    adminNum = 1;
  }

  let activeNum = 0;
  if (props.staffById.active === false) {
    activeNum = 1;
  }

  const closeBtn = e => {
    e.preventDefault();
    props.toggleStaffEditComponent();
  };

  //Arrays for dropdown menu
  // const admin = [
  //   { label: 'Yes', value: true },
  //   { label: 'No', value: false },
  // ];
  // const active = [
  //   { label: 'Yes', value: true },
  //   { label: 'No', value: false },
  // ];


  // const [state, setState] = useState({
  //   name: props.staffById.name,
  //   short_name: props.staffById.short_name,
  //   username: props.staffById.username,
  //   cpr: props.staffById.cpr,
  //   mobile_number: props.staffById.mobile_number,
  //   email: props.staffById.email,
  //   accent: props.staffById.accent,
  //   gender: props.staffById.gender,
  //   birthdate: birthdate,
  //   teaching_rate: props.staffById.teaching_rate,
  //   admin: props.staffById.user_type,
  //   active: props.staffById.active,
  // });

  // const handleChange = e => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const formSubmit = e => {
  //   e.preventDefault();
  //   props.editStaffById(staffID, state);
  // };


  // return (
  //   <FormWrap onSubmit={formSubmit}>
  //     <FormSet>
  //       <Div>
  //         <div>
  //           <Label>Name</Label>
  //           <div>
              // <Input
              //   type='text'
              //   name='name'
              //   placeholder='Name'
              //   onChange={handleChange}
              //   value={state.name}
              // />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Short Name</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='short_name'
  //               placeholder='Short Name'
  //               onChange={handleChange}
  //               value={state.short_name}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Username</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='username'
  //               placeholder='Username'
  //               onChange={handleChange}
  //               value={state.username}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>CPR</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='cpr'
  //               placeholder='CPR'
  //               onChange={handleChange}
  //               value={state.cpr}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Mobile Number</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='mobile_number'
  //               placeholder='Mobile Number'
  //               onChange={handleChange}
  //               value={state.mobile_number}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Accent</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='accent'
  //               placeholder='Accent'
  //               onChange={handleChange}
  //               value={state.accent}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Gender</Label>
  //           <div>
  //             <Dropdown
  //               onChange={e => setState({ ...state, gender: e.value })}
  //               value={state.gender}
  //               controlClassName='myControlClassName'
  //               options={genderArr}
  //               className='dropdown'
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Birthdate</Label>
  //           <div>
  //             <Input
  //               type='date'
  //               name='birthdate'
  //               placeholder='birthdate'
  //               onChange={handleChange}
  //               value={state.birthdate}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Teaching Rate</Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='teaching_rate'
  //               placeholder='Teaching Rate'
  //               onChange={handleChange}
  //               value={state.teaching_rate}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Admin</Label>
  //           <div>
  //             <Dropdown
  //               value={admin[adminNum].label}
  //               onChange={e => setState({ ...state, admin: e.value })}
  //               controlClassName='myControlClassName'
  //               className='dropdown'
  //               options={admin}
  //             />
  //           </div>
  //         </div>

  //         <div>
  //           <Label>Active</Label>
  //           <div>
  //             <Dropdown
  //               value={active[activeNum].label}
  //               onChange={e => setState({ ...state, active: e.value })}
  //               controlClassName='myControlClassName'
  //               className='dropdown'
  //               options={active}
  //             />
  //           </div>
  //         </div>
  //       </Div>
  //     </FormSet>
      // <ButtonDiv>
      //   <CancelButton onClick={closeBtn}>Cancel</CancelButton>
      //   <SaveButton type='submit'>Save</SaveButton>
      // </ButtonDiv>
  //   </FormWrap>
  // );

  return (
    <FormWrap onSubmit={handleSubmit(submitNow)}>
      <FormSet>
        <Div>
          <div>
            <Label>Name</Label>
            <div>
            <Input
                type='text'
                name='name'
                defaultValue={props.staffById.name}
                ref={register({required:true})}
                className={errors.name && "input-error"}
              />
              {errors.name && errors.name.type === "required" && 'Name is Required'}
            </div>
          </div>

          <div>
            <Label>Short Name</Label>
            <div>
              <Input type='text' 
              name= 'short_name'
              className={errors.short_name && "input-error"}
              defaultValue = {props.staffById.short_name}
              ref={register({required:true})} />
               {errors.short_name && errors.short_name.type === "required" && 'Short name is Required'}
            </div>
          </div>

          <div>
            <Label>Username</Label>
            <div>
              <Input type='text'
              name='username'
              className={errors.username && "input-error"}
              defaultValue = {props.staffById.username}
              ref={register({required:true})}
              />
              {errors.username && errors.username.type === "required" && 'Username is Required'}
            </div>
          </div>

          <div>
            <Label>CPR</Label>
            <div>
              <Input type="text"
              name="cpr"
              className={errors.cpr && "input-error"}
              defaultValue = {props.staffById.cpr}
              ref={register({required:true})}
              />
              {errors.cpr && errors.cpr.type === "required" && 'CPR is Required'}
            </div>
          </div>

          <div>
            <Label>Mobile Number</Label>
            <div>
              <Input type="text"
              name="mobile_number"
              className={errors.mobile_number && "input-error"}
              defaultValue = {props.staffById.mobile_number}
              ref={register({required:true})}
              />
              {errors.mobile_number && errors.mobile_number.type === "required" && 'Mobile Number is Required'}
            </div>
          </div>

          <div>
            <Label>Accent</Label>
            <div>
              <Input type="text"
              name="accent"
              className={errors.accent && "input-error"}
              defaultValue = {props.staffById.accent}
              ref={register({required:true})}
              />
              {errors.accent && errors.accent.type === "required" && 'Accent is Required'}
            </div>
          </div>

          <div>
            <Label>Gender</Label>
            <div>
              <select name="gender" defaultValue={props.staffById.gender} className="dropDown" ref={register({required:true})}>
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </div>
          </div>

          <div>
            <Label>Birthdate</Label>
            <div>
              <Input type="date"
              name="birthdate"
              className={errors.birthdate && "input-error"}
              defaultValue={birthdate}
              ref={register({required:true})}
              />
              {errors.birthdate && errors.birthdate.type === "required" && 'Birthdate is Required'}
            </div>
          </div>

          <div>
            <Label>Teaching Rate</Label>
            <div>
              <Input type="text"
              name="teaching_rate"
              className={errors.teaching_rate && "input-error"}
              defaultValue = {props.staffById.teaching_rate } 
              ref={register({required:true})}/>
              {errors.teaching_rate && errors.teaching_rate.type === "required" && 'Teaching Rate is Required'}
            </div>
          </div>

          <div>
            <Label>Admin</Label>
            <div>
            <select name="admin" defaultValue={props.staffById.user_type} className="dropDown" ref={register}>
                <option value="admin">Yes</option>
                <option value="staff">No</option>
              </select>
            </div>
          </div>

          <div>
            <Label>Active</Label>
            <div>
            <select name="active" defaultValue={props.staffById.active} className="dropDown" ref={register}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>

         
        </Div>
      </FormSet>
      <ButtonDiv>
        <CancelButton onClick={closeBtn}>Cancel</CancelButton>
        <SaveButton type='submit' onclick={handleSubmit}>Save</SaveButton>
      </ButtonDiv>
    </FormWrap>
  );
};

export default withRouter(
  connect(null, { editStaffById, toggleStaffEditComponent })(StaffForm)
);
