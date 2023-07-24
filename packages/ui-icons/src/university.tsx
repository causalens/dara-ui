import { faUniversity } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * University icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const University = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUniversity} {...props} />;
};

export default University;
