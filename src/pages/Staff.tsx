import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';
import { staff } from '../data/staff';
import './Staff.css';

const Staff: React.FC = () => {
  const groupedStaff = {
    Technical: staff.filter(s => s.department === 'Technical'),
    Medical: staff.filter(s => s.department === 'Medical'),
    'Youth Development': staff.filter(s => s.department === 'Youth Development'),
    Administration: staff.filter(s => s.department === 'Administration')
  };

  return (
    <div className="staff-page">
      <section className="staff-hero">
        <div className="container">
          <motion.div 
            className="staff-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Staff</h1>
            <p>Meet the dedicated professionals behind Stallions FC's success</p>
          </motion.div>
        </div>
      </section>

      <section className="staff-roster section">
        <div className="container">
          {Object.entries(groupedStaff).map(([department, departmentStaff], index) => (
            <motion.div 
              key={department}
              className="department-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="department-title">{department}</h2>
              <div className="staff-grid">
                {departmentStaff.map((member, memberIndex) => (
                  <motion.div
                    key={member.id}
                    className="staff-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                  >
                    <div className="staff-image-container">
                      <img src={member.image} alt={member.name} />
                      <div className="staff-overlay">
                        <div className="experience-badge">
                          <Clock size={16} />
                          {member.experience}
                        </div>
                      </div>
                    </div>
                    <div className="staff-info">
                      <h3>{member.name}</h3>
                      <p className="staff-position">{member.position}</p>
                      <p className="staff-bio">{member.bio}</p>
                      
                      <div className="qualifications">
                        <h4>
                          <GraduationCap size={16} />
                          Qualifications
                        </h4>
                        <ul>
                          {member.qualifications.map((qual, i) => (
                            <li key={i}>{qual}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Staff;