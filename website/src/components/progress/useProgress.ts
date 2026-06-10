import { useContext } from 'react';
import { ProgressContext, type ProgressContextType } from './ProgressProvider';

export function useProgress(): ProgressContextType {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
