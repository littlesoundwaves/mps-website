/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { aboutImage } from '../config/images';

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'My Pastoral Supervision',
  tagline: 'Integrity of heart and skilful hands',
  description:
    'Pastoral supervision for Christian ministers, chaplains, church workers, and pastoral carers, provided by a member of the Australasian Association of Supervision.',
  url: 'https://www.mypastoralsupervision.com.au',
  locale: 'en_AU',

  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'tony@mypastoralsupervision.com.au',
  phoneForTel: '+61430027636',
  phoneFormatted: '0430 027 636',
  address: {
    lineOne: '',
    lineTwo: '',
    city: 'Newcastle',
    state: 'NSW',
    zip: '',
    country: 'AU',
    mapLink: 'https://maps.app.goo.gl/Gm9JaxUmReqDpSma9',
  },
  hours: [
    { days: 'By appointment', time: 'In person or online' },
  ],
  emergencyService: '',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: '',
    instagram: '',
    google: 'https://maps.app.goo.gl/Gm9JaxUmReqDpSma9',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Book a Session', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Initial Consultation',
      description:
        'New clients are welcome to book a free 30-minute initial consult to discuss what supervision involves and make an introduction, before committing to ongoing sessions.',
    },
    {
      title: 'Pastoral Supervision',
      description:
        'A supportive, confidential relationship where Christian ministers reflect honestly on their ministry practice with a skilled, independent supervisor. Contracted over a 12-month period with 8-10 meetings, sessions include goal-setting, focus on real ministry issues, ethical practice, and a mid- and end-of-year review of progress.',
    },
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'Pastoral Supervision is an opportunity for those engaged in Christian ministry to meet with a skilled supervisor to evaluate their practice. Supervisees are provided with the opportunity to grow and develop through courageous conversations and honest reflection on best practice, within a supportive environment built on trust and confidentiality.',
      'Best practice in Christian ministry has always included some form of pastoral supervision. Following the Royal Commission into Institutional Responses to Child Sexual Abuse, formal pastoral supervision has become a required standard across most Christian denominations, ensuring ministers have professional supervision independent of the institution they serve.',
      'Purpose: To build Christian ministers with integrity of heart and skilful hands (Psalm 78:72). Vision: To passionately pursue the growth of Christ\'s body, the church — forming, supporting and aligning Christian ministers to best practice, powerfully and effectively serving God in their area of calling. Values: courageous conversations, honest reflection, personal growth, leadership development, and clear purpose.',
    ],
    team: [
      {
        name: 'Tony Calman',
        role: 'Pastoral Supervisor and Ministry Support Practitioner',
        image: aboutImage,
        bio: [
          'Tony Calman brings a deep commitment to church health, pastoral formation, and the support of Christian leaders. After a diverse work background, including roles as an electrician and prison officer, Tony commenced formal Christian ministry in 1995 at Westview Baptist Church, Doonside.',
          'Tony completed a Bachelor of Ministries and a Diploma of Theology at Morling College and was ordained and accredited by the Baptist Association of NSW and ACT. He served in local church ministry in Western Sydney and twice on the Committee for Ministry for the Baptist Association, which facilitated the accreditation of Baptist ministers, concluding his final four years as Chair. In 2006, he completed a Master of Arts in Theology from Morling College.',
          'After two decades in local church ministry, Tony sensed God\'s call to work more intentionally in the area of church health. Having carefully managed the succession of the pastoral role at Westview, he commenced this ministry with Greater West for Christ (GWFC), the regional ministry of the Baptist Association in Western Sydney, in 2016.',
          'During his time with GWFC, Tony served six Baptist churches in the region as a transitional pastor, helping them clarify their vision, purpose, mission, and values, prepare for their next season of ministry, and call a new pastor.',
          'Tony\'s focus on church health continues today through the additional dimension of pastoral supervision. In response to the need for effective pastoral supervision highlighted by the Royal Commission into Institutional Responses to Child Sexual Abuse, Tony completed a Graduate Certificate in Pastoral Supervision through St Mark\'s National Theological Centre. He is committed to building up Christian ministers with "integrity of heart and skilful hands" (Psalm 78:72), and has now relocated to the Newcastle region, where he continues in pastoral supervision and in the pastoral support of pastors across NSW and the ACT through the Baptist Association.',
          'His vision is to contribute to the growth of Christ\'s body, the church, by forming, supporting, and aligning Christian ministers with best practice so they may serve God faithfully, powerfully, and effectively in their areas of calling.',
        ],
      },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Grad Cert in Pastoral Supervision, St Marks National Theological Centre' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Book a Session', href: '/services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
