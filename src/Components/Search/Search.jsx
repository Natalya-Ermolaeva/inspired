import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import s from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleDisplaySearch } from "../../features/searchSlice.js";

export const Search = () => {
    const { isOpenSearch } = useSelector(state => state.search);
    const validationSchema = Yup.object({
        search: Yup.string().required('Введите значение для поиска')
    })
    const navigate = useNavigate();
    const dispatch =useDispatch();

    const handleSubmit = ({search}, {resetForm}) => {
        if (search.trim()) {
            navigate(`/search?q=${search}`);
            resetForm();
            dispatch(toggleDisplaySearch());
        }
    }

    return isOpenSearch && (
        <div className={s.search}>
            <Formik
                initialValues={{search: ''}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={s.form}>
                    <Field 
                        className={s.input}
                        type="text"
                        placeholder="Найти..."
                        name="search"
                    />
                    <ErrorMessage className={s.error} name="search" component="span"/>
                    <button className={s.btn} type="submit">Искать</button>
                </Form>
           </Formik>
        </div>
    )
}