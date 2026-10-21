import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import PageTransition from './PageTransition';
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

  let navigate = useNavigate();
  return (
     <PageTransition>
    <div style={{ 
      minHeight: '75vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      padding: '4rem 1.5rem',
      fontFamily: 'var(--font-family, sans-serif)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%',
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* LEFT COLUMN: CALL TO ACTION TEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
       
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '800', 
            color: '#1e293b', 
            lineHeight: '1.1',
            margin: '0',
            letterSpacing: '-0.02em'
          }}>
            Hi, I'am  <span style={{ color: '#6366f1' }}>Rajharpreet Singh</span>
            <br></br>
            Aspiring Software Engineer
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#64748b', 
            lineHeight: '1.6', 
            margin: '0',
            maxWidth: '540px' 
          }}>
            BCA Graduate Currently Persuing MCA from Amity University
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <Button 
              label="See certifications" 
              icon="pi pi-compass" 
              severity="primary" 
              size="large"
              style={{ borderRadius: '6px' }}
              onClick={()=>navigate("/certifications")} 
            />
            <a href="https://drive.google.com/file/d/1FhjrNPzbKgzpM2D_2kwDi8F5EkbjEU61/view?usp=sharing">
            <Button 
              label="Download CV" 
              icon="pi pi-external-link" 
              severity="secondary" 
              outlined 
              size="large"
              style={{ borderRadius: '6px' }}
            />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL COMPONENT PREVIEW */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '460px',
            height: '360px',
            background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            gap: '1.2rem'
          }}>
            {/* Using PrimeReact icon class framework */}
            <div style={{
              background: '#ffffff',
              padding: '1.5rem',
              borderRadius: '50%',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)'
            }}>
             
                  <img src="https://misqi.vercel.app/assets/profile_pic-CttrRV84.jpg" style={{borderRadius:"7rem",height:"12rem"}}></img>
              
            </div>
            
          
          </div>
        </div>

      </div>
    </div>
    </PageTransition>
  );
}
