'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gupl-uglify'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	cssmin = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	pngquant =require('gulp-pngquant'),
	rimraf = require('rimraf'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/',
		font: 'build/fonts/'
	},
	src: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		styla: 'src/style/main.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss',
		fonts: 'src/fonts/**/*.*'
	}
	clean: './build/'
};

var config = {
	server: {
		baseDir: "./build"
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "Frontend_Devil"
};
