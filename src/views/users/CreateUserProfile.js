import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CSelect,
  CRow,
  CNav,
  CNavLink
} from '@coreui/react'

const CreateUserProfile = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" sm="8">
          <CCard>
            <CCardBody>
              <CNav variant="tabs" className="mb-3">
                <CNavLink to="/create-user">User Registry</CNavLink>
                <CNavLink active>Profile</CNavLink>
              </CNav>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="username">Username*</CLabel>
                    <CInput id="username" placeholder="Username" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="firstName">First Name</CLabel>
                    <CInput id="firstName" placeholder="First Name" required />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="lastName">Last Name</CLabel>
                    <CInput id="lastName" placeholder="Last Name" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="email">E-mail Adress*</CLabel>
                    <CInput type="email" id="email" placeholder="E-mail Adress" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="phoneNumber">Phone Number</CLabel>
                    <CInput id="phoneNumber" pattern="\(\d{3}\)\d{3}-\d{4}" placeholder="(000) 000-0000" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="mobileNumber">Mobile Number*</CLabel>
                    <CInput id="lastName" pattern="\(\d{3}\)\d{3}-\d{4}" placeholder="(000) 000-0000" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="password">Password</CLabel>
                    <CInput id="password" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="confirm-assword">Confirm Password</CLabel>
                    <CInput id="confirm-password" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6" className="mb-3">
                  <CFormGroup>
                    <CLabel htmlFor="expire">Expire</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="expireYes" name="expireYes" value={false} checked />
                    <CLabel variant="custom-checkbox" htmlFor="expireYes">Yes</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="expireNever" name="expireNever" value={true} />
                    <CLabel variant="custom-checkbox" htmlFor="expireNever">Never</CLabel>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="expireDate">Expire Date</CLabel>
                    <CInput id="expireDate" placeholder="   /   /   " required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CLabel htmlFor="status">Status</CLabel>
                  <CSelect custom name="status" id="status">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </CSelect>
                </CCol>
              </CRow>
              <div className="form-actions mt-3">
                <CButton className="mr-3" type="submit" color="primary">Save changes</CButton>
                <CButton color="secondary">Cancel</CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CreateUserProfile
