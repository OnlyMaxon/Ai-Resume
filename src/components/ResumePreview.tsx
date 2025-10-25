import React from 'react';
import type { ResumeData, TemplateType } from '../types';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template }) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  if (template === 'modern') {
    return (
      <div id="resume-preview" className="bg-white p-8 min-h-[1000px]">
        {/* Header */}
        <div className="mb-6 pb-6 border-b-4 border-blue-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                <span className="truncate max-w-[200px]">{data.personalInfo.linkedin}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span className="truncate max-w-[200px]">{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-2">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">WORK EXPERIENCE</h2>
            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.position || 'Position'}</h3>
                      <p className="text-gray-700">{exp.company || 'Company'}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{exp.location}</p>
                      <p>
                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                      </p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-600 mb-3">EDUCATION</h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree || 'Degree'}</h3>
                    <p className="text-gray-700">{edu.institution || 'Institution'}</p>
                    <p className="text-sm text-gray-600">{edu.field}</p>
                    {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>{edu.location}</p>
                    <p>
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-600 mb-3">SKILLS</h2>
            <div className="grid grid-cols-2 gap-3">
              {data.skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name || 'Skill'}</span>
                    <span className="text-xs text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (template === 'classic') {
    return (
      <div id="resume-preview" className="bg-white p-8 min-h-[1000px]">
        {/* Header */}
        <div className="text-center mb-6 pb-4 border-b-2 border-gray-800">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>•</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>•</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Summary</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Experience</h2>
            <div className="space-y-3">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between mb-1">
                    <h3 className="font-bold text-gray-900">{exp.position || 'Position'}</h3>
                    <span className="text-xs text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-1">{exp.company || 'Company'} - {exp.location}</p>
                  {exp.description && (
                    <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Education</h2>
            <div className="space-y-2">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">{edu.degree || 'Degree'} in {edu.field}</h3>
                      <p className="text-xs text-gray-700">{edu.institution || 'Institution'}, {edu.location}</p>
                      {edu.gpa && <p className="text-xs text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                    <span className="text-xs text-gray-600">
                      {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill.id} className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded">
                  {skill.name || 'Skill'}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (template === 'minimal') {
    return (
      <div id="resume-preview" className="bg-white p-8 min-h-[1000px] font-light">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-light text-gray-900 mb-3">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <p className="text-sm text-gray-700 leading-loose">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experiences.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Experience</h2>
            <div className="space-y-5">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <h3 className="font-semibold text-gray-900 mb-1">{exp.position || 'Position'}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {exp.company || 'Company'} • {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </p>
                  {exp.description && (
                    <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Education</h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-semibold text-gray-900">{edu.degree || 'Degree'}</h3>
                  <p className="text-sm text-gray-600">
                    {edu.institution || 'Institution'} • {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest">Skills</h2>
            <p className="text-sm text-gray-700">
              {data.skills.map((s) => s.name).filter(Boolean).join(' • ')}
            </p>
          </div>
        )}
      </div>
    );
  }

  // Creative template
  return (
    <div id="resume-preview" className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 min-h-[1000px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl mb-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-3 text-sm">
          {data.personalInfo.email && <span>✉ {data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>📱 {data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>📍 {data.personalInfo.location}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="bg-white p-5 rounded-xl shadow-md mb-6">
          <h2 className="text-lg font-bold text-purple-600 mb-2">About Me</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experiences.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow-md mb-6">
          <h2 className="text-lg font-bold text-purple-600 mb-3">Experience</h2>
          <div className="space-y-4">
            {data.experiences.map((exp) => (
              <div key={exp.id} className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold text-gray-900">{exp.position || 'Position'}</h3>
                <p className="text-sm text-gray-600">{exp.company || 'Company'} • {exp.location}</p>
                <p className="text-xs text-gray-500 mb-2">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </p>
                {exp.description && (
                  <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow-md mb-6">
          <h2 className="text-lg font-bold text-purple-600 mb-3">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-bold text-gray-900">{edu.degree || 'Degree'}</h3>
                <p className="text-sm text-gray-700">{edu.institution || 'Institution'}</p>
                <p className="text-xs text-gray-600">
                  {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-lg font-bold text-purple-600 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-xs font-semibold rounded-full"
              >
                {skill.name || 'Skill'}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
