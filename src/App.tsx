/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import SessionConfigView from './components/SessionConfigView';
import PlenaryLiveView from './components/PlenaryLiveView';
import CommissionView from './components/CommissionView';
import VoteView from './components/VoteView';
import SummaryView from './components/SummaryView';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('config');

  const renderView = () => {
    switch (currentView) {
      case 'config':
        return <SessionConfigView />;
      case 'plenary-live':
        return <PlenaryLiveView />;
      case 'commission':
        return <CommissionView />;
      case 'vote':
        return <VoteView />;
      case 'summary':
        return <SummaryView />;
      default:
        return <SessionConfigView />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}
