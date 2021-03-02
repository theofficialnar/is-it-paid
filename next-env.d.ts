

/// <reference types="next" />
/// <reference types="next/types/global" />

import React from 'react';

declare module 'react' {
  interface ButtonHTMLAttributes<T> extends React.HTMLAttributes<T> {
    // extends React's Button attributes
    transparent?: boolean;
    outline?: boolean;
  }
}