import Layout from '../../../admin/ui-components/layout';
import { SlCalender } from 'react-icons/sl';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { FcSalesPerformance } from 'react-icons/fc';
import { BiDish } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const DashboardPage = () => {
  return (
    <Layout>
      <>
        {/* <HeaderSection
          heading={'Overview'}
          subHeading={`Welcome to your dashboard, ${currentUser?.data.email}`}
          rightItem={() => (
            <ActionButton
              onClick={() => setModal(true)}
              Icon={AiOutlinePlusCircle}
              label='Add New User'
              style={{ backgroundColor: '#D42C07', color: 'white' }}
            />
          )}
        />

        <Section>
          <DataCard
            Icon={FiUsers}
            label={'Total Users'}
            value={'23,34,450'}
            percentageValue={56.4}
            inverse={true}
          />
          <DataCard
            Icon={CiDeliveryTruck}
            label={'Live Orders'}
            value={'45,09,333'}
            percentageValue={3.45}
          />
          <DataCard
            Icon={BiDish}
            label={'Total Order'}
            value={'43,54,111'}
            percentageValue={10.89}
          />
          <DataCard
            Icon={FcSalesPerformance}
            label={'Total Sales'}
            value={'43,54,111'}
            percentageValue={10.49}
          />
        </Section>

        <Section>
          <Card
            heading='Income Statistics'
            subHeading='Have a look at the income stats'>
            <BarChartExample />
          </Card>
          <Card
            heading='Order Statistics'
            subHeading='Have a look at the order stats'>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <DoughnutChartExample
                labels={['Completion', 'Pending', 'Cancellation']}
                data={[300, 50, 100]}
              />
            </div>
          </Card>
        </Section>

        <BillingHistory />

        <Section>
          <Card
            heading=' Most Ordered Food'
            subHeading='Our most popular plan for small teams.'
            rightItem={() => {
              return <BiDotsVerticalRounded />;
            }}
            footerLeft={() => {
              return (
                <div className={styles['date-placeholder']}>
                  <SlCalender />
                  <p className='ml-5'>5th Sep 2023</p>
                </div>
              );
            }}
            footerRight={() => {
              return (
                <ActionButton
                  inverse={true}
                  label='View'
                  style={{ padding: '2px 5px', fontSize: 12 }}
                />
              );
            }}>
            <div style={{ margin: '10px', flexDirection: 'column' }}>
              <Paragraph />
            </div>
          </Card>

          <Card
            heading='Upcoming Schedule'
            subHeading='Change how you pay for plan'>
            <div style={{ margin: '10px' }}></div>
          </Card>
        </Section>

        <Modal
          isOpen={modal}
          onClose={handleClose}
          heading={'Your Admin Dashboard'}
          positiveText={'Save Changes'}
          negativeText={'Cancel'}
          onCancel={handleCancel}
          onSubmit={handleSubmit}>
          <p>Welcome to your admin dashboard</p>
        </Modal> */}
      </>
    </Layout>
  );
};

export default DashboardPage;
