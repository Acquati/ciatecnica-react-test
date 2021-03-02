import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CNav,
  CNavLink,
  CLink
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
                <CCol xs="6">
                  <CLabel htmlFor="profile">Profile</CLabel>
                  <CSelect custom name="profile" id="profile">
                    <option value="ActOffice Supportive">Office Support</option>
                    <option value="Business Contact">Business Contact</option>
                    <option value="Driver">Driver</option>
                  </CSelect>
                </CCol>
                <CCol xs="6">
                  <CLabel htmlFor="company">Company</CLabel>
                  <CSelect custom name="company" id="company">
                    <option value="Company 1">Company 1</option>
                    <option value="Company 2">Company 2</option>
                    <option value="Company 3">Company 3</option>
                  </CSelect>
                </CCol>
              </CRow>
              <div className="form-actions mt-3">
                <CButton className="mr-3" type="submit" color="primary"><CLink style={{ color: 'white', textDecoration: 'none' }} to="/users">Save changes</CLink></CButton>
                <CButton color="secondary"><CLink style={{ color: '#3c4b64', textDecoration: 'none' }} to="/create-user-profile">Cancel</CLink></CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CreateUserProfile
