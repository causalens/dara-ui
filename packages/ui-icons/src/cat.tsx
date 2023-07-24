import { faCat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCat} {...props} />;
};

export default Cat;
