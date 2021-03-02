import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [data, setData] = useState([])
  const [sortType, setSortType] = useState('Active')

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  const sortArray = sortType => {
    const sorted = [...usersData].sort(function (a, b) {
      const nameA = a.status.toUpperCase()
      const nameB = b.status.toUpperCase()

      if (sortType === 'Active') {
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      } else {
        if (nameA > nameB) {
          return -1
        }
        if (nameA < nameB) {
          return 1
        }
        return 0
      }
    })

    setData(sorted)
  }

  useEffect(() => {
    sortArray(sortType)
  }, [sortType])

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Users
            <div className="card-header-actions">
              <CSelect custom name="status" id="status" onChange={(e) => setSortType(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </CSelect>
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={data}
              fields={[
                'name', 'username', 'profile', 'status', 'actions'
              ]}
              hover
              striped
              itemsPerPage={10}
              activePage={page}
              // clickableRows
              // onRowClick={(item) => history.push(`/users/${item.id}`)}
              scopedSlots={{
                'name':
                  (item) => (
                    <td>
                      {item.firstName + ' ' + item.lastName}
                    </td>
                  ),
                'status':
                  (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'actions':
                  () => (
                    <td>
                      <CButton shape="pill" color="light" className="mr-2"><CIcon name="cilPencil" size="sm" /></CButton>
                      <CButton shape="pill" color="light"><CIcon name="cilBan" size="sm" /></CButton>
                    </td>
                  )
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
