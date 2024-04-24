import { star, people01, people02, people03, facebook, github,linkedin } from '../assets'

export const navLinks = [
  {
    id: 'home',
    title: 'Trang chủ'
  },
  {
    id: 'profile',
    title: 'Hồ sơ'
  },
  {
    id: 'projects',
    title: 'Dự án'
  },
  {
    id: 'contact',
    title: 'Liên hệ'
  },
];
export const projectList = [
  {
    id: 1,
    icon: star,
    title: 'Dự án E-learning',
    content: 'Đây là dự án tâm huyết của tôi, tôi đóng vai trò là cầu nối liên hệ giữ các ban để đưa dự án e-learning triển khai thành công tại EMS'
  },
  {
    id: 2,
    icon: star,
    title: 'Dự án Vietfly',
    content: 'Đây là dự án tôi thực hiện cùng nhóm bạn khi đang thực tập tại True Skill Center'
  },
  {
    id: 3,
    icon: star,
    title: 'Dự án kết nối CMS',
    content: 'Đây là dự án sử dụng API để đồng bộ dữ liệu hai phần mềm CSKH của VNPost và EMS'
  }
]
export const feedback = [
  {
    id: 'fb-1',
    name: 'Roger Leitner',
    title: ['Former CEO of HalongPay','Chairman of Switzerland Asia Chamber of Commerce'],
    content: 
    'Duong is a creative person who always comes up with ideas to approach our customer and make them happy',
    image: people01
  },
  {
    id: 'fb-2',
    name: 'Conny Karlsson',
    title: ['Former CTO of HalongPay'],
    content: 
    'The dedication, resourcefulness and enthusiasm of Duong is a great asset to any organization',
    image: people02
  },
  {
    id: 'fb-3',
    name: 'Vũ Tiến Hưng',
    title: ['Phó ban Nghiên cứu và phát triển EMS'],
    content: 
    'Sáng tạo và chủ động trong công việc',
    image: people03
  },

]
 export const footerLinks = [
  {
    title: 'Contacts', 
    links: [
      {
        id: 'fb',
        icon: facebook,
        name: 'Facebook',
        link: 'https://www.facebook.com/duong.nguyenquang.180/'
      },
      {
        id: 'linkedin',
        icon: linkedin,
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/nguy%E1%BB%85n-quang-d%C6%B0%C6%A1ng-aa218a154/'
      },
      {
        id: 'github',
        icon: github,
        name: 'Github',
        link: 'https://www.linkedin.com/in/nguy%E1%BB%85n-quang-d%C6%B0%C6%A1ng-aa218a154/'
      },
    ]
  },
 ]

 