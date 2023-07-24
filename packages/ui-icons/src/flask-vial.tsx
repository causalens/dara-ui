import { faFlaskVial } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FlaskVial icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FlaskVial = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlaskVial} {...props} />;
};

export default FlaskVial;
