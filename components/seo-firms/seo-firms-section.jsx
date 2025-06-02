import React from 'react';
import { Tag, Star, MapPin, Users, Clock, Briefcase } from 'lucide-react';
import Link from 'next/link';

import companiesData from '../../data/seoFirmsData.json';

const CompanyCard = ({ company }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 container mx-auto">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-16 h-16 rounded-full  flex items-center justify-center text-white font-bold text-xl"
                    />
                    <div>
                        <div className="flex items-center space-x-2">
                            <h2 className="text-2xl font-semibold text-gray-900">{company.name}</h2>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                                <span className="text-xl font-bold text-gray-900">{company.rating}</span>
                                <div className="flex ml-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <Link href={company?.websiteUrl} className="btn">
                        Visit Website
                    </Link>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Tag className="w-4 h-4" />
                        <span>{company.priceRange}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{company.hourlyRate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{company.employeeCount}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{company.location}</span>
                    </div>
                </div>

                {/* Middle Column - Services (3 columns) */}
                <div className="lg:col-span-3">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Services
                    </h3>
                    <div className="space-y-3">
                        {company.services.map((service, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-700">
                                        {service.percentage}% {service.name}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full"
                                        style={{
                                            width: `${service.percentage}%`,
                                            backgroundColor: service.color
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


                <div className="lg:col-span-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        About Company
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                        {company.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const SeoFirmSection = () => {
    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    Top Companies
                </h1>
                <div className="space-y-6">
                    {companiesData.companies.map((company) => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeoFirmSection;