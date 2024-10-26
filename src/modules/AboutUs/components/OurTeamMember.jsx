import { Images } from "../../../assets/imgs/Images";
export const OurTeamMember = (data) => {
    return (<div className='ml-4 mr-4 flex flex-col'>
      <img src={Images.team.member01} alt=''/>
      <div className='mt-4 text-light100 text-sm'>{data.name}</div>
      <div className='mb-8 text-primary100 text-sm'>{data.role}</div>
    </div>);
};
