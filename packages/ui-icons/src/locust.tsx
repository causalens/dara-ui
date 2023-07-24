import { faLocust } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Locust icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Locust = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocust} {...props} />;
};

export default Locust;
