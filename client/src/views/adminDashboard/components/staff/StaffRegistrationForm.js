import React, { useState , useEffect } from 'react';
import { connect } from 'react-redux';
import { addStaff, getStaffTable } from '../../../../actions';
import { withRouter } from 'react-router-dom';

import { useForm } from 'react-hook-form'

import { FormWrap, Input,Button, Div, FormSet, Label, ButtonDiv } from '../mainStyle/styledComponent';
import '../mainStyle/mainTable.scss';

const StaffRegistrationForm = props => {
  const { register, errors, handleSubmit } = useForm();

  const submitNow = data => {
    props.addStaff(data);
    props.setForm(false);
  }

	useEffect(() => {
		props.getStaffTable();
  }, []);

  const cancelBtn = e => {
    e.preventDefault();
    props.setForm(false);
  };


  //Dropdown Menu Arrays -> the Boolean Dropdowns must be in below format //to submit a true boolean
  // const gender = ['M', 'F'];
  // const admin = [
  //   { label: 'True', value: true },
  //   { label: 'False', value: false },
  // ];
  // const active = [
  //   { label: 'True', value: true },
  //   { label: 'False', value: false },
  // ];
  // initial state
  // const [state, setState] = useState({
  //   name: '',
  //   username: '',
  //   password: '',
  //   short_name: '',
  //   cpr: '',
  //   mobile_number: '',
  //   gender: '',
  //   email: '',
  //   accent: '',
  //   birthdate: '',
  //   teaching_rate: '',
  //   admin: '',
  //   active: '',
  // });

  // const handleChange = e => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const formSubmit = e => {
  //   e.preventDefault();
  //   props.addStaff(state);
  //   props.getStaffTable();
  //   setTimeout(() => {
  //     props.setForm(false);
  //   }, 2000);
  // };


  // return (
  //   <FormWrap onSubmit={formSubmit}>
  //     <FormSet>
  //       <Div>
  //         {/* row 1 */}
  //         <div>
  //           <Label>Name </Label>
  //           <div>
  //             <Input
  //               type='text'
  //               name='name'
  //               placeholder='Name'
  //               onChange={handleChange}
  //               value={state.name}
  //             />
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
  //           <Label>Password</Label>
  //           <div>
  //             <Input
  //               type='password'
  //               name='password'
  //               placeholder='Password'
  //               onChange={handleChange}
  //               value={state.password}
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

  //         {/* row 2 */}
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
  //               value={state.gender}
  //               onChange={e => setState({ ...state, gender: e.value })}
  //               controlClassName='myControlClassName'
  //               className='dropdown'
  //               options={gender}
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

  //         {/* row3 */}
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
  //               value={state.admin}
  //               onChange={e => setState({ ...state, admin: e })}
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
  //               value={state.active}
  //               onChange={e => setState({ ...state, active: e })}
  //               controlClassName='myControlClassName'
  //               className='dropdown'
  //               options={active}
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <Label>Email</Label>
  //           <div>
  //             <Input
  //               type='email'
  //               name='email'
  //               placeholder='Email'
  //               onChange={handleChange}
  //               value={state.email}
  //             />
  //           </div>
  //         </div>
  //       </Div>
  //     </FormSet>
      // <ButtonDiv>
      //   <Button
      //     type='button'
      //     value='cancel'
      //     onClick={cancelBtn}
      //     style={{ background: '#C73642', width: '80px' }}
      //   >
      //     Cancel
      //   </Button>
      //   <Button type='submit'>Add Staff</Button>
      // </ButtonDiv>
  //   </FormWrap>
  // );

  return (
    <FormWrap  onSubmit={handleSubmit(submitNow)}>
      <FormSet>
        <Div>
          <div>
            <Label>Name</Label>
          <div>
          <Input    
                type='text' name='name' ref={register({required:true})} className={errors.name && "input-error"}/>
              {errors.name && errors.name.type === "required" && 'Name is Required'}
            </div>
            </div>

            <div>
            <Label>Short Name</Label>
            <div>
              <Input type='text' name= 'short_name' className={errors.short_name && "input-error"}  ref={register({required:true})} />
               {errors.short_name && errors.short_name.type === "required" && 'Short name is Required'}
            </div>
          </div>

          <div>
            <Label>Username</Label>
            <div>
              <Input type='text' name= 'username' className={errors.username && "input-error"}  ref={register({required:true})} />
               {errors.username  && errors.username.type === "required" && 'Username is Required'}
            </div>
          </div>

          <div>
            <Label>Password</Label>
            <div>
              <Input type='password' name= 'password' className={errors.password && "input-error"}  ref={register({required:true})} />
               {errors.password  && errors.password.type === "required" && 'Password is Required'}
            </div>
          </div>

          <div>
            <Label>CPR</Label>
            <div>
              <Input type='text' name= 'cpr' className={errors.cpr&& "input-error"}  ref={register({required:true})} />
               {errors.username  && errors.cpr.type === "required" && 'CPR is Required'}
            </div>
          </div>

          <div>
            <Label>Mobile Number</Label>
            <div>
              <Input type='text' name= 'mobile_number' className={errors.mobile_number && "input-error"}  ref={register({required:true})} />
               {errors.mobile_number && errors.mobile_number.type === "required" && 'Mobile Number is Required'}
            </div>
          </div>

          <div>
            <Label>Accent</Label>
            <div>
              <Input type='text' name= 'accent' className={errors.accent && "input-error"}  ref={register({required:true})} />
               {errors.accent && errors.accent.type === "required" && 'Accent is Required'}
            </div>
          </div>

          <div>
            <Label>Gender</Label>
            <div>
              <select name="gender" className="dropDown" ref={register}>
                <option value="F">F</option>
                <option value="M">M</option>
              </select>
            </div>
          </div>

          <div>
            <Label>Birthdate</Label>
            <div>
              <Input type='date' name= 'birthdate' className={errors.birthdate && "input-error"}  ref={register({required:true})} />
               {errors.birthdate && errors.birthdate.type === "required" && 'Birthdate is Required'}
            </div>
          </div>

          <div>
            <Label>Teaching Rate</Label>
            <div>
              <Input type='text' name= 'teaching_rate' className={errors.teaching_rate && "input-error"}  ref={register({required:true})} />
               {errors.teaching_rate && errors.teaching_rate.type === "required" && 'Teaching Rate is Required'}
            </div>
          </div>


          <div>
            <Label>Admin</Label>
            <div>
              <select name="admin" className="dropDown" ref={register}>
                <option value="admin">Yes</option>
                <option value="staff">No</option>
              </select>
            </div>
          </div>

          <div>
            <Label>Active</Label>
            <div>
            <select name="active" className="dropDown" ref={register}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>

          <div>
            <Label>Email</Label>
            <div>
              <Input type="email" name="email" className={errors.mobile_number && "input-error"}  ref={register({required:true})}/>
              {errors.email && errors.email.type === "required" && 'Email is Required'}
            </div>
          </div>





        </Div>
      </FormSet>
      <ButtonDiv>
        <Button
          type='button'
          value='cancel'
          onClick={cancelBtn}
          style={{ background: '#C73642', width: '80px' }}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit} type='submit'>Add Staff</Button>
      </ButtonDiv>
    </FormWrap>
  )
};

const mapStateToProps = state => {
  return {
    staffList: state.staffTableReducer.staff,
  };
};

export default withRouter(
  connect(mapStateToProps, { addStaff, getStaffTable })(StaffRegistrationForm)
);
