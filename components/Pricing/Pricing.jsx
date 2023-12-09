import React, { useEffect } from 'react';
import './Pricing.css';

const Pricing = () => {
  useEffect(() => {
    const pcardsContainer = document.querySelector('.pcards');
    const pcardsContainerInner = document.querySelector('.pcards__inner');
    const pcards = Array.from(document.querySelectorAll('.pcard'));
    const overlay = document.querySelector('.overlay');

    const applyOverlayMask = (e) => {
      const overlayEl = e.currentTarget;
      const x = e.pageX - pcardsContainer.offsetLeft;
      const y = e.pageY - pcardsContainer.offsetTop;

      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const createOverlayCta = (overlaypcard, ctaEl) => {
      const overlayCta = document.createElement('div');
      overlayCta.classList.add('cta');
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute('aria-hidden', true);
      overlaypcard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const pcardIndex = pcards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (pcardIndex >= 0) {
          overlay.children[pcardIndex].style.width = `${width}px`;
          overlay.children[pcardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlaypcard = (pcardEl) => {
      const overlaypcard = document.createElement('div');
      overlaypcard.classList.add('pcard');
      createOverlayCta(overlaypcard, pcardEl.lastElementChild);
      overlay.append(overlaypcard);
      observer.observe(pcardEl);
    };

    pcards.forEach(initOverlaypcard);
    document.body.addEventListener('pointermove', applyOverlayMask);

    // Clean up function
    return () => {
      document.body.removeEventListener('pointermove', applyOverlayMask);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pricepage">
    <div className="pmain flow">
    <h1 className="pmain__heading">Pricing</h1>
    <div className="pmain__pcards pcards">
      <div className="pcards__inner">
        <div className="pcards__pcard pcard">
          <h2 className="pcard__heading">Basic</h2>
          <p className="pcard__price">$9.99</p>
          <ul role="list" className="pcard__bullets flow">
            <li>Access to standard workouts and nutrition plans</li>
            <li>Email support</li>
          </ul>
          <a href="#basic" className="pcard__cta cta">Get Started</a>
        </div>
  
        <div className="pcards__pcard pcard">
          <h2 className="pcard__heading">Pro</h2>
          <p className="pcard__price">$19.99</p>
          <ul role="list" className="pcard__bullets flow">
            <li>Access to advanced workouts and nutrition plans</li>
            <li>Priority Email support</li>
            <li>Exclusive access to live Q&A sessions</li>
          </ul>
          <a href="#pro" className="pcard__cta cta">Upgrade to Pro</a>
        </div>
  
        <div className="pcards__pcard pcard">
          <h2 className="pcard__heading">Ultimate</h2>
          <p className="pcard__price">$29.99</p>
          <ul role="list" className="pcard__bullets flow">
            <li>Access to all premium workouts and nutrition plans</li>
            <li>24/7 Priority support</li>
            <li>1-on-1 virtual coaching session every month</li>
            <li>Exclusive content and early access to new features</li>
          </ul>
          <a href="#ultimate" className="pcard__cta cta">Go Ultimate</a>
        </div>
      </div>
      
      <div className="overlay pcards__inner"></div>
    </div>
  </div>
  </div>
  );
};

export default Pricing;

